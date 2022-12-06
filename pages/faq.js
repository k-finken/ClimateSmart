import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function FAQ() {
    return (
        <>
            <NavBar />
            <div className="w-full px-4 pt-16 bg-[#f5f7f8]">
                <div className="mx-auto w-full max-w-2xl rounded-2xl bg-[#f5f7f8] p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>What is ClimateSmart?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                    ClimateSmart is an extensive tool built for learning and interacting with climate information.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="mt-10 transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>What can I do on ClimateSmart?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Currently on ClimateSmart you can use our videos page to learn more about climate related topics as well as our Tools page to use our interactive climate related activites
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="mt-10 transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>Where are the videos from?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                    The videos on ClimateSmart are curated from a selection of high-quality reviewed content that we believe is the most informative out there.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="mt-10 transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>Why was ClimateSmart made?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                ClimateSmart was made by a team of individuals that want users to educate themselves on climate change and how to make the earth healthier.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="mt-10 transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>How can I share ClimateSmart?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                The URL to the ClimateSmart will allow the new user to create an account and navigate around the website.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="mt-10 transition flex w-full justify-between rounded-lg bg-themeLightest px-4 py-2 text-left text-sm font-medium text-themeMedium hover:bg-themeDark focus:outline-none focus-visible:ring focus-visible:ring-themeLight focus-visible:ring-opacity-75">
                                        <span className='font-bold'>I used all the features on ClimateSmart, what else can I do?</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } transition-all h-5 w-5 text-purple-500`}
                                        />
                                </Disclosure.Button>
                                <Disclosure.Panel className="delay-700 transition px-4 pt-4 pb-2 text-sm text-gray-500">
                                Stay tuned for future updates to the website and use the references on the website to create the features to further your knowledge of climate change.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
            <div className='bg-[#f5f7f8] h-96 w-full'>d</div>
            <Footer />
        </>
    )
}
