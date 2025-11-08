import React from 'react'
import { Navbar, Typography, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import { useParams } from 'react-router-dom'
import selectArrow from '../../assets/images/select-arrow.svg'
import { PresentationLink as Link } from '../presentation'

export default function Header({ presentations }) {
  const { presentationId } = useParams()
  const presentation = presentations[presentationId]
  const menuList = Object.values(presentations).map(
    presentation => (
      <MenuItem key={presentation.id}>
        <Link presentation={presentation} />
      </MenuItem>
    )
  )

  return (
    <Navbar color='transparent' className='max-w-screen-xl mx-auto justify-around px-4'>
      <div className='container flex justify-between items-center text-blue-grey-900'>
        <Typography
          as='a' href='/epresentation/' variant='small'
          className='py-1.5 mr-4 cursor-pointer font-normal text-lg hover:font-semibold hover:underline flex-1'>
          EP
        </Typography>
        {
          presentation && <Typography variant='small' className='py-1.5 mr-4 font-normal text-lg flex-[2] text-center'>
            {presentation.title}
          </Typography>
        }
        <Menu placement='bottom-end'>
          <MenuHandler>
            <div className='flex justify-end items-center flex-1'>
              <Typography
                as='span' variant='small'
                className='py-1.5 cursor-pointer font-normal text-lg hidden
                           md:block hover:font-semibold hover:underline'
              >
                Presentations
              </Typography>
              <img src={selectArrow} className='h-4 w-4 opacity-75' />
            </div>
          </MenuHandler>
          <MenuList>
            {menuList}
          </MenuList>
        </Menu>
      </div>
    </Navbar>
  )
}
