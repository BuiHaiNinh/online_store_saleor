import React from 'react';

import {OrderDirection, Product, ProductOrderField, useFilterProductsQuery} from '@/saleor/api';
import {ProductElement} from '@/components';

const styles = {
  grid: 'grid gap-4 grid-cols-4',
}

const filter: string = "T-Shirt";

export const FilterProductCollection = () => {
  const { loading, error, data } = useFilterProductsQuery({
    variables: {
      filter: {search: filter},
      sortBy: {
        field: ProductOrderField.Name,
        direction: OrderDirection.Asc,
      }
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (data) {
    const products = data.products?.edges || [];

    return (
      <ul role="list" className={styles.grid}>
        {products?.length > 0 &&
          products.map(
            ({ node }) => <ProductElement key={node.id} {...node as Product} />,
          )}
      </ul>
    );
  }

  return null;
}
