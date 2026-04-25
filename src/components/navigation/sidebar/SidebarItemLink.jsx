import Link from 'next/link';

export default function SidebarItemLink({ title, href }) {
  return (
    <li className='flex items-center'>
      <Link
        href={href}
        className='w-full py-3.5 text-lg transition-colors duration-200 hover:text-primary active:text-primary'
      >
        {title}
      </Link>
    </li>
  );
}
