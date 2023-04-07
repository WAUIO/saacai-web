interface ChatListProps {
  title: string;
  subtitle: string;
  image: string;
}

// see https://tailwindcss.com/docs/hover-focus-and-other-states#first-last-odd-and-even
export default ({title, subtitle, image}: ChatListProps) => (
  <li className="flex py-4 first:pt-0 last:pb-0">
    <img className="h-10 w-10 rounded-full" src={image} alt="" />
    <div className="ml-3 overflow-hidden">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="text-sm text-slate-500 truncate">{subtitle}</p>
    </div>
  </li>
)