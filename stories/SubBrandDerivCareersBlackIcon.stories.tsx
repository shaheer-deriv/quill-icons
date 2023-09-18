import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivCareersBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivCareersBlackIcon',
  component: SubBrandDerivCareersBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivCareersBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivCareersBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
