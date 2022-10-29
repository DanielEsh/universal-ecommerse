import React from 'react'
import Head from 'next/head'
import { Dropdown } from '@/src/shared/ui/dropdown/Dropdown'
import { Menu } from '@/src/shared/ui/dropdown/Menu'
import { Divider } from '@/src/shared/ui/Divider/Divider'

const Test = () => {
    return (
        <div>
            <Head>
                <title>Test</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <div className="flex p-2 bg-white">
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-primary-500"></div>
                    <div className="w-24 h-24 bg-primary-400"></div>
                    <div className="w-24 h-24 bg-primary-300"></div>
                    <div className="w-24 h-24 bg-primary-200"></div>
                    <div className="w-24 h-24 bg-primary-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-secondary-500"></div>
                    <div className="w-24 h-24 bg-secondary-400"></div>
                    <div className="w-24 h-24 bg-secondary-300"></div>
                    <div className="w-24 h-24 bg-secondary-200"></div>
                    <div className="w-24 h-24 bg-secondary-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-highlight-500"></div>
                    <div className="w-24 h-24 bg-highlight-400"></div>
                    <div className="w-24 h-24 bg-highlight-300"></div>
                    <div className="w-24 h-24 bg-highlight-200"></div>
                    <div className="w-24 h-24 bg-highlight-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-surface-500"></div>
                    <div className="w-24 h-24 bg-surface-400"></div>
                    <div className="w-24 h-24 bg-surface-300"></div>
                    <div className="w-24 h-24 bg-surface-200"></div>
                    <div className="w-24 h-24 bg-surface-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-success-500"></div>
                    <div className="w-24 h-24 bg-success-400"></div>
                    <div className="w-24 h-24 bg-success-300"></div>
                    <div className="w-24 h-24 bg-success-200"></div>
                    <div className="w-24 h-24 bg-success-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-error-500"></div>
                    <div className="w-24 h-24 bg-error-400"></div>
                    <div className="w-24 h-24 bg-error-300"></div>
                    <div className="w-24 h-24 bg-error-200"></div>
                    <div className="w-24 h-24 bg-error-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-warning-500"></div>
                    <div className="w-24 h-24 bg-warning-400"></div>
                    <div className="w-24 h-24 bg-warning-300"></div>
                    <div className="w-24 h-24 bg-warning-200"></div>
                    <div className="w-24 h-24 bg-warning-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-link-500"></div>
                    <div className="w-24 h-24 bg-link-400"></div>
                    <div className="w-24 h-24 bg-link-300"></div>
                    <div className="w-24 h-24 bg-link-200"></div>
                    <div className="w-24 h-24 bg-link-100"></div>
                </div>
            </div>

            <div>Test Page</div>

            <div className="flex justify-center items-center">
                <Dropdown>
                    <Dropdown.Trigger>Trigger</Dropdown.Trigger>

                    <Dropdown.Content>
                        <Menu>
                            <Menu.Group>User</Menu.Group>
                            <Menu.Item>User Name</Menu.Item>
                            <Divider />
                            <Menu.Group>Actions</Menu.Group>
                            <Menu.Item>Delete</Menu.Item>
                            <Menu.Item>Edit</Menu.Item>
                            <Menu.Item>Create</Menu.Item>
                        </Menu>
                    </Dropdown.Content>
                </Dropdown>
            </div>

            <div className="h-[1000px]"></div>
        </div>
    )
}

export default Test
