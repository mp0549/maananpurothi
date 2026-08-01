/** Types for the hand-rolled rehype plugin in rehype-prose.mjs. */
declare module '@/lib/rehype-prose.mjs' {
  const rehypeProse: () => (tree: unknown) => void;
  export default rehypeProse;
}
