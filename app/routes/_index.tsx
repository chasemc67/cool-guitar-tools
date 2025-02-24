import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Cool Guitar Tools - Guitar Learning Tools' },
    {
      name: 'description',
      content: 'The best directory of guitar tools and learning resources',
    },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background dark">
      <div className="container mx-auto flex flex-1 flex-col items-center justify-center gap-8 p-4 pb-20 md:pb-4">
        <h1>Welcome to Cool Guitar Tools</h1>
      </div>
    </div>
  );
}
