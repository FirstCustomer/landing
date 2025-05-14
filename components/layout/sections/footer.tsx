import { Separator } from '@/components/ui/separator';
import { Users2Icon } from 'lucide-react';
import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer id='footer' className='container py-24 sm:py-32'>
      <div className='p-10 bg-card border border-secondary rounded-2xl'>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8'>
          <div className='col-span-full xl:col-span-2'>
            <Link href='#' className='flex font-bold items-center'>
              <Users2Icon className='w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary' />

              <h3 className='text-2xl'>FirstCustomer</h3>
            </Link>
          </div>

          <div className='flex flex-col gap-2'></div>

          <div className='flex flex-col gap-2'>
            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Contact Us
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                FAQ
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div>
              <Link href='#' className='opacity-60 hover:opacity-100'>
                Feedback
              </Link>
            </div>
          </div>
        </div>

        <Separator className='my-6' />
        <section className=''>
          <h3 className=''>&copy; 2025 FirstCustomer.ai</h3>
        </section>
      </div>
    </footer>
  );
};
