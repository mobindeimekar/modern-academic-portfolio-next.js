'use client'

import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { sidebarActions } from '@/redux/sidebarSlice.js';
import { sidebarFlyIn } from '@/utils/motionVariants.js';
import Icon from '@/components/ui/Icon.jsx';
import { navLinks } from '@/data/NavlinkData.js';

export default function Sidebar() {
  const [openId, setOpenId] = useState(null);

  const isSidebar = useSelector((state) => state.sidebarExistance.sidebar);
  const dispatch = useDispatch();

  function handleSidebar() {
    dispatch(sidebarActions.toggleSidebar());
  }

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <AnimatePresence>
        {isSidebar && (
          <>
            <div
              onClick={handleSidebar}
              className='fixed top-0 z-11 h-lvh w-lvw bg-black/50'
            ></div>

            <motion.div
              variants={sidebarFlyIn}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed top-0 left-0 z-12 flex h-lvh w-[330px] flex-col text-white will-change-transform *:
                        bg-white/4
                        border border-white/10
                        inset-shadow-xs inset-shadow-white/30
                        backdrop-blur-sm'
            >
              <div className='flex items-center justify-between px-7 py-5 text-2xl font-bold'>
                <span>منو</span>
                <button type='button' onClick={handleSidebar} aria-label='Close sidebar'>
                  <Icon name="close" className="h-6 w-6" />
                </button>
              </div>

              <hr className='border-gray-200' />

              <ul className='mt-5 flex flex-col px-7 gap-5 '>
                {navLinks.map((item , index) => {
                 
                    return (
                      <a
                        key={item.index}
                        href={item.href}
                        className='text-lg'
                      >
                      {item.label}
                      </a>
                    );
                  
                  ;
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
