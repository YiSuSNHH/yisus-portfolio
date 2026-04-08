"use client";

import { NextIntlClientProvider } from "next-intl";
import type { AbstractIntlMessages, IntlError } from "next-intl";

type IntlProviderProps = {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
  defaultMessages: AbstractIntlMessages;
  timeZone?: string;
};

function readMessageByPath(
  source: AbstractIntlMessages,
  namespace: string | undefined,
  key: string
): unknown {
  const path = namespace ? `${namespace}.${key}` : key;
  const parts = path.split(".");

  let value: unknown = source;
  for (const part of parts) {
    if (!value || typeof value !== "object" || !(part in (value as Record<string, unknown>))) {
      return null;
    }

    value = (value as Record<string, unknown>)[part];
  }

  return value;
}

export function IntlProvider({ children, locale, messages, defaultMessages, timeZone }: IntlProviderProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
      onError={(error: IntlError) => {
        if (error.code === "MISSING_MESSAGE") {
          console.warn("[i18n][missing-message]", {
            locale,
            message: error.message,
          });
          return;
        }

        console.error("[i18n][error]", {
          locale,
          code: error.code,
          message: error.message,
        });
      }}
      getMessageFallback={({ namespace, key }) => {
        const defaultValue = readMessageByPath(defaultMessages, namespace, key);
        if (typeof defaultValue === "string") {
          return defaultValue;
        }

        const rawKey = namespace ? `${namespace}.${key}` : key;
        return rawKey;
      }}
    >
      {children}
    </NextIntlClientProvider>
  );
}
