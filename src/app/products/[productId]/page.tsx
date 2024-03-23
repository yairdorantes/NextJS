import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
const page = ({ params }: Props) => {
  return <div>product {params.productId} </div>;
};

export default page;
