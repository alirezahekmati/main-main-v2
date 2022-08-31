import Typography from "@mui/material/Typography";
import useSWR from "swr";
import NextLink from "next/link";
import { Skeleton } from "@mui/material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function A() {
  const { data, error } = useSWR("http://localhost:3000/api/hello", fetcher);
  return (
    <>
      <Typography> a Blog by {data ? data.name : <Skeleton />}</Typography>
      <NextLink href={"/"}>back to home</NextLink>
    </>
  );
}
