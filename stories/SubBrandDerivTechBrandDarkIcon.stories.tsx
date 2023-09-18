import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivTechBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivTechBrandDarkIcon',
  component: SubBrandDerivTechBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivTechBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivTechBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
