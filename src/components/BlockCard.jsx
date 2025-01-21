import { blogPosts } from "../data/blogPosts";
export function BlockCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <BlockCard
          key={index}
          imageUrl={post.imageUrl}
          title={post.title}
          description={post.description}
          likes={post.likes}
          category={post.category}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

