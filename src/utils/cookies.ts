const setCookie = (name: string, value: string): void => {
  document.cookie = `${name}=${value}; path=/`;
}

const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const removeCookie = (name: string): void => {
  document.cookie = `${name}=;expires=${new Date(0)}; path=/`;
}

export { setCookie, getCookie, removeCookie };
