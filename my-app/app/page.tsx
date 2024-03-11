import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1 className='text-white'>Hello World</h1>
      <Link href='/users' className='text-white no-underline hover:underline'>
        Users
      </Link>{' '}
      {/* blindside navigation */}
      <ProductCard />
    </main>
  );
}
