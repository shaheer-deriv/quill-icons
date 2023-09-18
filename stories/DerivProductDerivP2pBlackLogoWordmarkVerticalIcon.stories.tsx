import type { Meta, StoryObj } from '@storybook/react';

import { DerivProductDerivP2pBlackLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/DerivProductDerivP2pBlackLogoWordmarkVerticalIcon',
  component: DerivProductDerivP2pBlackLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DerivProductDerivP2pBlackLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof DerivProductDerivP2pBlackLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
