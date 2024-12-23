// utils/handleStickyHeaders.ts

export const handleStickyHeaders = (contentRef: React.RefObject<HTMLDivElement>) => {
    const sections = contentRef.current?.querySelectorAll('section');
    sections?.forEach((section) => {
      const h2 = section.querySelector('h2');
      let h2Wrapper = section.querySelector('.h2-wrapper');
  
      if (h2 && !h2Wrapper) {
        h2Wrapper = document.createElement('article');
        h2Wrapper.className = 'h2-wrapper';
        h2.parentNode?.insertBefore(h2Wrapper, h2);
        h2Wrapper.appendChild(h2);
      }
  
      const rect = section.getBoundingClientRect();
      if (h2Wrapper instanceof HTMLElement && h2) {
        if (rect.top <= 0 && rect.bottom >= h2Wrapper.offsetHeight) {
          h2Wrapper.style.position = 'sticky';
          h2Wrapper.style.top = '0';
        } else {
          // Remove the wrapper and place the h2 back in its original position
          if (h2Wrapper.parentNode) {
            h2Wrapper.parentNode.insertBefore(h2, h2Wrapper);
            h2Wrapper.parentNode.removeChild(h2Wrapper);
          }
          h2.style.position = 'static';
        }
      }
    });
  };
  