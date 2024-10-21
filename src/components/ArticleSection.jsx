import * as React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { BlockCard } from "./BlockCard";
import { blogPosts } from "../data/blogPosts";


function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [activeCategory, setActiveCategory] = React.useState("Highlight");

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Latest articles</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-gray-200"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="relative w-full lg:w-auto">
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full lg:w-[300px] bg-white border-gray-200"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-600">Article list would go here...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm font-medium text-blue-600">{post.category}</span>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.author} • {post.date}</span>
                <span className="text-sm text-gray-500">{post.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
export default ArticleSection;
