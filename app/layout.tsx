import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Breadcrumb, Layout, Menu, Watermark } from 'antd';
import { Header,Content,Footer } from "antd/es/layout/layout";
import type { MenuProps } from 'antd';
import { AppstoreOutlined, HomeOutlined, SettingOutlined,FileTextOutlined,PinterestOutlined } from '@ant-design/icons';
import "./globals.css";
import { useState } from "react";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });
const colorBgContainer = 'black'

export const metadata: Metadata = {
  title: "HOUM",
  description: "build you desc",
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href="/">Home</Link>,
    key: 'index',
    icon: <HomeOutlined />,
  },
  {
    label: 'Diss me',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'js',
    icon: <FileTextOutlined />,
    label: (
      <Link href="/js">Filter Page</Link>
    ),
  },
  {
    key: 'About',
    icon: <PinterestOutlined />,
    label: (
      <Link href="/hjd">About</Link>
    ),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use client';

  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <AntdRegistry>
        <Layout>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"

              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content>
           
            <div
              style={{
                //background: colorBgContainer,
                minHeight: 280,
                //padding: 24,
                //borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
            {/* <Watermark content="HOUM">
           
            </Watermark> */}
           
          </Content>
          <Footer style={{ textAlign: 'center', background:colorBgContainer, color:'#fff' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>

        </AntdRegistry>
       </body>
    </html>
  );
}
