import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="w-full h-full">

            <div className="w-full px-6 py-4 ">
                <div>
                    <Link href="/" className='underline'>
                        go to home
                    </Link>
                </div>

                {children}
            </div>
        </div>
    );
}
