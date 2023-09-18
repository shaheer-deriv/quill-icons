import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivLifeWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivLifeWhiteIcon',
  component: SubBrandDerivLifeWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivLifeWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivLifeWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
