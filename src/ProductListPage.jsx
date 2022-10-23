import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import FancyInput from "./FancyInput";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductListPage() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  let { query, sort, page } = params;
  query = query || "";
  sort = sort || "default";
  page = page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        sortType = "desc";
      }
      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleQueryChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }
  function handleSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-between">
        <FancyInput
          value={query}
          placeholder="search"
          onChange={handleQueryChange}
        />
        <select
          onChange={handleSortChange}
          value={sort}
          className="border-2 border-red-300 rounded-md pb-1 pt-1 ml-0.5"
        >
          <option value="default">Default sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>
      {productData.data.length > 0 && (
        <ProductList products={productData.data} />
      )}
      {productData.data.length == 0 && (
        <NoMatching>No Matching Product</NoMatching>
      )}
      {range(1, productData.meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo })}
          className={
            "text-lg font-bold border rounded-md p-2 text-white" +
            (pageNo == page ? "bg-red-400" : "bg-violet-500")
          }
        >
          {pageNo}
        </Link>
      ))}
    </div>
  );
}
export default ProductListPage;
