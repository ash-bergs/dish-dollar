import Header from '~/components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default Layout;
