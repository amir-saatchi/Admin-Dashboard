import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

function PostPage() {
  return (
    <>
      <BackButton link="/" text="Go Back" />
      <PostsTable />
      <PostsPagination />
    </>
  );
}

export default PostPage;
