export const useSidebar = () => {
  const isOpen = useCookie<boolean>('sidebar-is-open', {
    default: () => false,
    maxAge: 60 * 60 * 24 * 365
  });

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  return { isOpen, toggle };
};