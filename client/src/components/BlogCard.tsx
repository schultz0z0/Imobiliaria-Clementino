import { Calendar, User, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogCard({
  id,
  image,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" data-testid={`card-blog-${id}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-accent text-accent-foreground border-accent-border">
              {category}
            </Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-xl mb-3 line-clamp-2 min-h-[3.5rem]" data-testid={`text-blog-title-${id}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
