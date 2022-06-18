import React from 'react'

import {
  ProductCollection,
  Layout
} from '@/components';

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  ClearRefinements,
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox, SortBy, Stats
} from "react-instantsearch-dom";
import Hit from "@/components/Hit";
import {Portal} from "next/dist/client/portal";

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "RksvDEtvf7u9ihkY17xjB1yzr5DdBhvm", // Search only API key
    nodes: [
      {
        host: "b0opazgkjrh8362lp-1.a1.typesense.net", //Typesense Cloud
        port: 443,
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  additionalSearchParameters: {
    query_by: "name, category",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;


const Home = () => {
  return (
    <Layout>
      <div  className="py-10">
        <header  className="mb-4">
          <div  className="px-8 mx-auto max-w-7xl">
            <h1  className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <ProductCollection/>
        </main>
      </div>
    </Layout>
  )
}

export default Home
