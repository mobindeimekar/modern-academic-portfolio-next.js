import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function SidebarItemAccordion({
  id,
  title,
  childrenItems,
  isOpen,
  onToggle,
}) {
  return (
    <li className='flex flex-col'>
      <button
        type='button'
        onClick={() => onToggle(id)}
        className='flex w-full items-center justify-between py-3.5 text-lg transition-colors duration-200 hover:text-primary active:text-primary'
        aria-expanded={isOpen}
        aria-controls={`sidebar-panel-${id}`}
      >
        <span>{title}</span>
        <Icon
          name="chevronDown"
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <ul
        id={`sidebar-panel-${id}`}
        className={`flex flex-col ps-3 gap-y-2 overflow-hidden pl-3 text-lg font-light transition-[max-height] duration-500 ${
          isOpen ? 'max-h-[320px]' : 'max-h-0'
        }`}
      >
        {childrenItems.map((child) => (
          <li key={child.id}>
            <Link
              href={child.href}
              className='block w-full py-2 transition-colors duration-200 hover:text-primary active:text-primary'
            >
              {child.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
