import { AntdRegistry } from '@ant-design/nextjs-registry';
import CrispChat from './CrispChat';
import GoogleAnalytics from './GoogleAnalytics';
import GTM from './GTM';
import QueryProvider from './QueryProvider';
import AppProvider from './AppProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GTM />
      </head>
      <body>
        <QueryProvider>
          <AppProvider>
            <AntdRegistry>
              {children}
              <CrispChat />
              <GoogleAnalytics />
            </AntdRegistry>
          </AppProvider>
        </QueryProvider>
      </body>
    </html>
  );
}