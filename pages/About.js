import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function B() {
  return (
    <>
      <Typography> About page</Typography>
      <NextLink href={"/"}>back to home</NextLink>
    </>
  );
}
