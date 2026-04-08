import { hasLocale } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { IntlProvider } from "@/components/IntlProvider";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default as AbstractIntlMessages;
  const defaultMessages =
    locale === routing.defaultLocale
      ? messages
      : ((await import(`../../messages/${routing.defaultLocale}.json`)).default as AbstractIntlMessages);

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultMessages={defaultMessages}
      timeZone="Asia/Ho_Chi_Minh"
    >
      <div lang={locale}>{children}</div>
    </IntlProvider>
  );
}
