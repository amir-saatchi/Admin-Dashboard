"use client";

// Libraries
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// ShadCN Components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// components
import BackButton from "@/components/BackButton";
import posts from "@/Data/posts";

const formSchema = z.object({
  title: z.string().min(2, { message: "Title is required" }).max(50),
  body: z.string().min(2, { message: "Body is required" }).max(500),
  author: z.string().min(2, { message: "Author is required" }).max(50),
  date: z.string().min(2, { message: "Date is required" }).max(50),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

function PostEditPage({ params: { id } }: PostEditPageProps) {
  const { toast } = useToast();
  const post = posts.find((post) => post.id === id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "Post has been updated",
      description: `Updated by ${post?.author}`,
    });
  }

  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
      <h3 className="text-2xl mb-4">Edit post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold
                 text-zinc-500 dark:text-white"
                >
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Title"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold
                 text-zinc-500 dark:text-white"
                >
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Body"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold
                 text-zinc-500 dark:text-white"
                >
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Author name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="uppercase text-xs font-bold
                 text-zinc-500 dark:text-white"
                >
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full dark:bg-slate-800 dark:text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PostEditPage;
