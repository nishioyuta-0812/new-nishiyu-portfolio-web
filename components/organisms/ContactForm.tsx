'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '名前は2文字以上で入力してください。',
  }),
  email: z.string().email({
    message: '有効なメールアドレスを入力してください。',
  }),
  subject: z.string().min(5, {
    message: '件名は5文字以上で入力してください。',
  }),
  message: z.string().min(10, {
    message: 'メッセージは10文字以上で入力してください。',
  }),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'お問い合わせを受け付けました',
      description: '内容を確認次第、ご連絡させていただきます。',
    });
    form.reset();
  }

  return (
    <Card className="border-primary/10">
      <CardHeader>
        <CardTitle className="font-jp text-2xl">お問い合わせフォーム</CardTitle>
        <CardDescription>
          以下のフォームに必要事項をご入力ください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>お名前</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-9" placeholder="山田 太郎" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-9"
                        placeholder="your@email.com"
                        type="email"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>件名</FormLabel>
                  <FormControl>
                    <Input placeholder="お問い合わせ内容の要点" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メッセージ</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容の詳細をご記入ください"
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full gap-2">
              <Send className="h-4 w-4" />
              送信する
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};