// Images
import LogoImg from '@/assets/logo.webp';
import MyImg from '@/assets/me.webp';
import CssLogo from '@/assets/tech/css.webp';
import DockerLogo from '@/assets/tech/docker.webp';
import FigmaLogo from '@/assets/tech/figma.webp';
import GitLogo from '@/assets/tech/git.webp';
import HtmlLogo from '@/assets/tech/html.webp';
import JavascriptLogo from '@/assets/tech/javascript.webp';
import MongodbLogo from '@/assets/tech/mongodb.webp';
import NodejsLogo from '@/assets/tech/nodejs.webp';
import ReactjsLogo from '@/assets/tech/reactjs.webp';
import ReduxLogo from '@/assets/tech/redux.webp';
import TailwindLogo from '@/assets/tech/tailwind.webp';
import TypescriptLogo from '@/assets/tech/typescript.webp';
import NextjsLogo from '@/assets/tech/nextjs.webp';
import { Poppins } from 'next/font/google';
import Backend from '@/assets/about/backend.png';
import Frontend from '@/assets/about/frontend.png';
import Blockchain from '@/assets/about/creator.png';
import Native from '@/assets/about/native.png';

const logos = [
  {
    id: 4,
    src: HtmlLogo,
  },
  {
    id: 3,
    src: CssLogo,
  },
  {
    id: 6,
    src: JavascriptLogo,
  },
  {
    id: 11,
    src: TypescriptLogo,
  },
  {
    id: 8,
    src: ReactjsLogo,
  },
  {
    id: 7,
    src: MongodbLogo,
  },
  {
    id: 9,
    src: ReduxLogo,
  },
  {
    id: 10,
    src: TailwindLogo,
  },
  {
    id: 12,
    src: NextjsLogo,
  },
  {
    id: 5,
    src: GitLogo,
  },
  {
    id: 1,
    src: FigmaLogo,
  },
  {
    id: 2,
    src: DockerLogo,
  },
];

export const domains = [
  {
    name: 'Frontend development',
    image: Frontend,
  },
  {
    name: 'Backend development',
    image: Backend,
  },
  {
    name: 'React Native development',
    image: Native,
  },
  {
    name: 'Blockchain development',
    image: Blockchain,
  },
];
export const poppinsBold = Poppins({
  subsets: ['latin'],
  weight: '800',
});
export {
  LogoImg,
  MyImg,
  CssLogo,
  DockerLogo,
  FigmaLogo,
  GitLogo,
  HtmlLogo,
  JavascriptLogo,
  MongodbLogo,
  NodejsLogo,
  ReactjsLogo,
  ReduxLogo,
  TailwindLogo,
  TypescriptLogo,
  NextjsLogo,
  logos,
};
