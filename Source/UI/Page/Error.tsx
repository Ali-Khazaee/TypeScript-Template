export default function Error()
{
    return (
        <div className='flex h-screen w-screen'>
            <div className='m-auto flex flex-col gap-4 rounded-lg bg-zinc-200 p-6'>
                <p className='text-center text-4xl'>☠️</p>
                <p>404 NOT FOUND</p>
            </div>
        </div>
    );
}
