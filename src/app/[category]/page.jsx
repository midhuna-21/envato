"use client";

import CategoryCard from "./CategoryCard";

// JSON DATA (6 ITEMS)
const categories = [
  {
    id: 1,
    title: "Pellentesque enim odio.",
    author: "Jane Doe",
    date: "October 05 2014",
    comments: 2,
    description:
      "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare.",
    tags: ["Design", "People", "Style", "Music"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  },
  {
    id: 2,
    title: "Curabitur rhoncus ligula.",
    author: "Admin",
    date: "November 12 2014",
    comments: 5,
    description:
      "Curabitur hendrerit, libero nec vestibulum imperdiet, urna sapien dapibus odio, vitae vestibulum turpis massa quis nisi.",
    tags: ["Travel", "People", "Life"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  },
  {
    id: 3,
    title: "Sed faucibus sapien.",
    author: "John Smith",
    date: "September 28 2014",
    comments: 4,
    description:
      "Etiam eget erat eu leo lacinia rutrum. In hac habitasse platea dictumst. Mauris bibendum odio vitae felis.",
    tags: ["Culture", "Music", "Design"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  },
  {
    id: 4,
    title: "Nulla facilisi donec.",
    author: "Editor",
    date: "August 20 2014",
    comments: 3,
    description:
      "Suspendisse finibus arcu quis libero pulvinar commodo. Vivamus arcu ligula, volutpat vel dictum eu.",
    tags: ["Art", "Photography"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  },
  {
    id: 5,
    title: "Maecenas mollis lorem.",
    author: "Jane Doe",
    date: "July 14 2014",
    comments: 1,
    description:
      "Sed tristique feugiat mi nec hendrerit. Aliquam erat volutpat. Donec sodales, urna ut bibendum aliquet.",
    tags: ["People", "Design"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  },
  {
    id: 6,
    title: "Fusce eget interdum.",
    author: "Admin",
    date: "June 02 2014",
    comments: 6,
    description:
      "Nullam vitae lacus non mauris tristique feugiat. Integer a elit vel mi viverra suscipit vitae in sapien.",
    tags: ["Style", "Music", "Travel"],
    image: "/mnt/data/11d91494-d8c3-4540-aef1-5d7a8974070a.png"
  }
];

export default function CategoryList() {
  return (
    <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 py-10">
      {categories.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
