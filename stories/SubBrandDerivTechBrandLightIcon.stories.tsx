import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivTechBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivTechBrandLightIcon',
  component: SubBrandDerivTechBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivTechBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivTechBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
