import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivAcademyBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivAcademyBlackIcon',
  component: SubBrandDerivAcademyBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivAcademyBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivAcademyBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
