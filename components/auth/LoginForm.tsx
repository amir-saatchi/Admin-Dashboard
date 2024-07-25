"use client";

import { useRouter } from "next/navigation";

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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "email is required" })
    .email({ message: "Please Enter a valid Email" }),
  password: z.string().min(8, { message: "Password is required" }).max(40),
});

function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    router.push("/");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Log into your account with your credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="uppercase text-xs font-bold
                     text-zinc-500 dark:text-white"
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-slate-100 dark:bg-slate-800 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                      placeholder="Enter Email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your Email Address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className="uppercase text-xs font-bold
                     text-zinc-500 dark:text-white"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-slate-100 dark:bg-slate-800 border-0 focus-visible:ring-0
                     text-black dark:text-white focus-visible:ring-offset-0"
                      placeholder="Enter Password"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full dark:bg-slate-800 dark:text-white"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;

//  <>
// <h3 className="text-2xl mb-4">Login</h3>
// <Form {...form}>
//   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//     <FormField
//       control={form.control}
//       name="email"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel
//             className="uppercase text-xs font-bold
//            text-zinc-500 dark:text-white"
//           >
//             Email
//           </FormLabel>
//           <FormControl>
//             <Input
//               className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
//                text-black dark:text-white focus-visible:ring-offset-0"
//               placeholder="Enter Title"
//               {...field}
//             />
//           </FormControl>
//           <FormDescription>This is your Email Address.</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />

//     <FormField
//       control={form.control}
//       name="password"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel
//             className="uppercase text-xs font-bold
//            text-zinc-500 dark:text-white"
//           >
//             Password
//           </FormLabel>
//           <FormControl>
//             <Input
//               className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0
//                text-black dark:text-white focus-visible:ring-offset-0"
//               placeholder="Enter Author name"
//               {...field}
//             />
//           </FormControl>
//           <FormDescription>This is your Password.</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />

//     <Button
//       type="submit"
//       className="w-full dark:bg-slate-800 dark:text-white"
//     >
//       Submit
//     </Button>
//   </form>
// </Form>
// </>
