import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivTechWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivTechWhiteIcon',
  component: SubBrandDerivTechWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivTechWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivTechWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
