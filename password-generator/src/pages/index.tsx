import React, { useEffect } from 'react';
import Layout from '../components/layout';
import PasswordGenerator from '@/components/passwordGenerator';

function HomePage() {
  useEffect(() => {
    console.log('HomePage component mounted');
    return () => {
      console.log('HomePage component unmounted');
    };
  }, []);

  return (
    <Layout>
      <div className="App min-h-screen pt-0 flex flex-col sm:pt-0 bg-gray-100">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <PasswordGenerator />
        </div>
      </div>
    </Layout>
  );
}

type Props = {
  children: React.ReactNode
};

type State = {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error('Error in HomePage:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>An error occurred. Check the console for more details.</div>;
    }

    return this.props.children;
  }
}



export default function HomePageWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}
