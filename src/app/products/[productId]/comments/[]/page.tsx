const page = ({
  params,
}: {
  params: { commentId: string; productId: string };
}) => {
  return (
    <div>
      comment {params.commentId} from product {params.productId}{" "}
    </div>
  );
};

export default page;
