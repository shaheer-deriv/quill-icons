import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivTechBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivTechBlackIcon',
  component: SubBrandDerivTechBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivTechBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivTechBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
