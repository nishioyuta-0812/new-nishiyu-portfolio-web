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
    <Card className="group relative overflow-hidden border-[#1e90ff]/10 bg-[#0a0f1e]/60 backdrop-blur-sm">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1e90ff]/20 group-hover:border-[#e8b830]/40 transition-colors duration-500 z-10" />

      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#e8b830]/60" />
          <span className="font-mono text-[10px] text-[#e8b830]/50 tracking-wider">MSG-COMPOSE</span>
        </div>
        <CardTitle className="font-jp text-2xl text-white/90">お問い合わせフォーム</CardTitle>
        <CardDescription className="text-[#1e90ff]/50">
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
                  <FormLabel className="text-[#1e90ff]/70 font-mono text-xs tracking-wider">お名前</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-[#1e90ff]/40" />
                      <Input
                        className="pl-9 bg-[#0a0f1e]/80 border-[#1e90ff]/15 text-white/80 placeholder:text-[#1e90ff]/25 focus:border-[#1e90ff]/40 focus:ring-[#1e90ff]/20"
                        placeholder="山田 太郎"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1e90ff]/70 font-mono text-xs tracking-wider">メールアドレス</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-[#1e90ff]/40" />
                      <Input
                        className="pl-9 bg-[#0a0f1e]/80 border-[#1e90ff]/15 text-white/80 placeholder:text-[#1e90ff]/25 focus:border-[#1e90ff]/40 focus:ring-[#1e90ff]/20"
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
                  <FormLabel className="text-[#1e90ff]/70 font-mono text-xs tracking-wider">件名</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#0a0f1e]/80 border-[#1e90ff]/15 text-white/80 placeholder:text-[#1e90ff]/25 focus:border-[#1e90ff]/40 focus:ring-[#1e90ff]/20"
                      placeholder="お問い合わせ内容の要点"
                      {...field}
                    />
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
                  <FormLabel className="text-[#1e90ff]/70 font-mono text-xs tracking-wider">メッセージ</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="お問い合わせ内容の詳細をご記入ください"
                      className="min-h-[200px] bg-[#0a0f1e]/80 border-[#1e90ff]/15 text-white/80 placeholder:text-[#1e90ff]/25 focus:border-[#1e90ff]/40 focus:ring-[#1e90ff]/20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 bg-[#1e90ff]/20 border border-[#1e90ff]/30 text-[#1e90ff] hover:bg-[#1e90ff]/30 hover:border-[#1e90ff]/50 hover:text-white transition-all duration-300"
            >
              <Send className="h-4 w-4" />
              送信する
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
