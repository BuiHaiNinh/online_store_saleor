import { useQueryState } from "next-usequerystate";
import React, {ReactElement, useState} from "react";
//‚import { useIntl } from "react-intl";
import { useDebounce } from "react-use";

import { Layout, ProductCollection } from "@/components";
import { ProductFilterInput } from "@/saleor/api";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const [debouncedFilter, setDebouncedFilter] = React.useState<ProductFilterInput>({
    search: searchQuery,
  });

  useDebounce(
    () => {
      setDebouncedFilter({ search: searchQuery });
    },
    1000,
    [searchQuery]
  );

  return (
    <Layout>
      <main className="max-w-7xl mx-auto w-full px-8 mt-5">
        <p className="font-semibold text-2xl mb-5">Search</p>
        <input
          className="md:w-96 mb-10 block border-gray-300 rounded-md shadow-sm sm:text-sm"
          type="text"
          value={searchQuery || ""}
          placeholder="placeholder"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ProductCollection filter={debouncedFilter} />
      </main>
    </Layout>
  );
}

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
