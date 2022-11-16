import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CardBtn from "../src/components/button/card/cardBtn";
import Pagination from "../src/components/button/pagination/pagination";
import Card from "../src/components/card/card";
import { Container } from "../src/components/common/container.style";
import { WrapperV } from "../src/components/common/wrapper.style";
import Filter from "../src/components/filter/filter";
import Grid from "../src/components/grid/grid";
import { useAppDispatch, useAppSelector } from "../src/redux/hooks";
import { fetchCatalog } from "../src/redux/slicers/catalogSlicer";
import { Catalog } from "../src/types/catalog";

const Home: NextPage = () => {
  const [catalog, setCatalog] = useState<Catalog | null>();
  const [pagNumber, setPagNumber] = useState<number>(1);
  const productList = useAppSelector((state) => state.catalog.catalog);
  const dispatch = useAppDispatch();
  // const [filter, setFilter] = useState<number>(0);
  // const refPagNumber = useRef(pagNumber);

  useEffect(() => {
    dispatch(fetchCatalog(pagNumber));
    setCatalog(productList);
  });

  return (
    <Container>
      <Filter />
      <WrapperV>
        <Grid foundItems={catalog?.totalItems}>
          {catalog &&
            catalog.items.map((wine, index) => (
              <WrapperV key={index}>
                <Card {...wine} />
                <CardBtn />
              </WrapperV>
            ))}
        </Grid>
        {catalog && (
          <Pagination
            setPagNumber={setPagNumber}
            numberOfPages={catalog?.totalPages}
          />
        )}
      </WrapperV>
    </Container>
  );
};

export default Home;
