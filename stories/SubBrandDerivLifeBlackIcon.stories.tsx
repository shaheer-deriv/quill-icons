import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivLifeBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivLifeBlackIcon',
  component: SubBrandDerivLifeBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivLifeBlackIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivLifeBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
