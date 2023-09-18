import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBrandLightWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBrandLightWordmarkVerticalIcon',
  component: DerivProductDerivP2pBrandLightWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBrandLightWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBrandLightWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
