-- Gives code blocks without a language the class `text`, so that pandoc
-- writes them as fenced (```text) rather than indented code blocks.
-- Indented code is lost when it begins a document, as Astro trims bodies.
function CodeBlock(block)
  if #block.classes == 0 then
    block.classes = { 'text' }
  end
  return block
end
