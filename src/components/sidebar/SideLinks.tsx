'use client';
import { ISidebarItem } from '@/lib/types';
import {
  BookUser,
  CircleUserRound,
  ClipboardList,
  Home,
  Network,
  UserRoundCheck,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarLinks: ISidebarItem[] = [
  { name: 'Home', path: '/', Icon: Home },
  { name: 'About', path: '/about', Icon: BookUser },
  { name: 'Work', path: '/work', Icon: Network },
  { name: 'Projects', path: '/projects', Icon: ClipboardList },
  { name: 'Feedbacks', path: '/feedbacks', Icon: UserRoundCheck },
  { name: 'Contact', path: '/contact', Icon: CircleUserRound },
];

const SingleLink = ({ name, path, Icon }: ISidebarItem) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`flex items-center md:gap-3 xl:text-xl origin-right p-3 rounded-l-3xl cursor-pointer side-link ${pathname === path
          ? 'bg-[#14121b] active scale-95'
          : 'hover:scale-95 duration-500'
          }`}
      >
        <Icon />
        <p className='hidden md:block'>{name}</p>
      </Link>
    </li>
  );
};

const SideLinks = () => {
  return (
    <ul className="flex-col flex gap-3 pl-4 mt-4">
      {sidebarLinks.map((sidebarLink) => (
        <SingleLink key={sidebarLink.path} {...sidebarLink} />
      ))}
    </ul>
  );
};
export default SideLinks;
